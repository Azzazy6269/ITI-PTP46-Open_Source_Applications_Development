const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const getTemplate = (templateName) => {
    const filePath = path.join(__dirname, `../templates/emails/${templateName}.html`);
    return fs.readFileSync(filePath, 'utf8');
};


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendEmail =async (to, subject,html)=>{
    const mailOptions = {
        from : process.env.EMAIL_FROM,
        to,
        subject,
        html
    }
    return await transporter.sendMail(mailOptions);
}

const sendWelcomeEmail =async (user)=>{
    let html = getTemplate('welcome');
    return await sendEmail(user.email,"Welcome to Our Blog!" , html);
}

const sendPasswordResetEmail = async(user, resetToken)=>{
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`
    let html = getTemplate('passwordReset');
    html = html.replace('${resetUrl}', resetUrl);
    return await sendEmail(user.email,"Password Reset Request",html)
}

const sendPasswordResetConfirmation = async(user)=>{
    const html = getTemplate('passwordResetConfirmation');
    return await sendEmail(user.email,"password reset confirmation",html);
}

const sendCommentNotification = async(postAuthor, commenter, post, comment)=>{
    let html = getTemplate('commentNotification');
    html = html.replace('${commenterName}', commenter.name);
    html = html.replace('${postTitle}', post.title);
    html = html.replace('${commentContent}', comment.content);
    
    return await sendEmail(postAuthor,"New comment on your post",html);
}

const sendReplyNotification =async (commentAuthor, replier, comment, reply)=>{
    let html = getTemplate('replyNotification');
    html = html.replace('${replierName}', replier.name);
    html = html.replace('${replyContent}', reply.content);
    html = html.replace('${commentContent}', comment.content);
    return await sendEmail(commentAuthor,"Someone replied on your comment",html);
}
module.exports = {sendWelcomeEmail , sendPasswordResetEmail , sendPasswordResetConfirmation , sendCommentNotification , sendReplyNotification}