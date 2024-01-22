using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Options;
using System.Net.Mail;
using System.Net;

namespace WebApp4.Services
{
    public class EmailSender : IEmailSender
    {
        public IConfiguration Configuration { get; }
        public EmailSender(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            if (string.IsNullOrEmpty(email))
            {
                throw new Exception("Null email");
            }
            return Task.Run(() => SendMail(email, subject, htmlMessage));
        }
        public void SendMail(string email, string subject, string HtmlMessage)
        {
            using (MailMessage mm = new MailMessage(Configuration["NetMail:sender"], email))
            {
                mm.Subject = subject;
                string body = HtmlMessage;
                mm.Body = body;
                mm.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = Configuration["NetMail:smtpHost"];
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential(Configuration["NetMail:sender"], Configuration["NetMail:senderpassword"]);
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
            }
        }
    }
}
