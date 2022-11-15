import type { NextApiRequest, NextApiResponse } from 'next'
import connectToMongo from '../../database/connection'
import EarlyAccessUsers from '../../database/early-access-users'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

type Data = {
  message: String
}

export default async function signupEarlyAccess(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectToMongo();

  const {email, twitterUsername} = JSON.parse(req.body)

  const readHTMLFile = (path:any, callback:any) => {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
           callback(err);                 
        }
        else {
            callback(null, html);
        }
    });
};

  try {
    const registeredUser = await EarlyAccessUsers.findOne({ email: email })
        console.log(registeredUser)
        if (registeredUser) {
            console.log('user exists already')
            res.status(200).json({ message: "You are already signed up for early access! 🔥" })
        }
        else {
            await EarlyAccessUsers.create({
                email: email,
                twitterUsername: twitterUsername
            })

            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD
              },
            });

            readHTMLFile('/Threadify/public/email-template.html', function(err:any, html:any) {
              if (err) {
                 console.log('error reading file', err);
                 return;
              }

              console.log(path.join(__dirname + '../../public/email.template.html'))

              let mailOptions = {
                from: 'threadify07@gmail.com',
                to: email,
                subject: 'Thanks for becoming an early user on Threadify!',
                html : html
              };
          
              transporter.sendMail(mailOptions, function (error:any, info:any) {
                if (error) {
                  console.log(error.message);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

              res.status(200).json({ message: "Successfully signed up for the early access! 🔥" })
            })
        
           

        }
  } catch (error) {
    console.log(error)
  }
}
