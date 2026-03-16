/*Defining Variable Type*/
interface EmailTemplateProps {
  name: string;
  companyName: string;
  industry: string;
  subject: string;
  email: string;
  message: string;
  yearlyRev: string;
}

export const EmailTemplate = ({name, companyName, industry, subject, email, message, yearlyRev}: EmailTemplateProps) => {
    return(
        <div>
            <p>
                <span>Name: </span>
                <strong>{name}</strong>
            </p>
            <p>
                <span>Company Name: </span>
                <strong>{companyName}</strong>
            </p>
            <p>
                <span>Industry: </span>
                <strong>{industry}</strong>
            </p>
            <p>
                <span>Subject: </span>
                <strong>{subject}</strong>
            </p>
            <p>
                <span>Email: </span>
                <strong>{email}</strong>
            </p>
            
            <p>
                <span>Message: </span>
                <strong>{message}</strong>
            </p>

            <p>
                <span>Annual Revenue Range: </span>
                <strong>{yearlyRev}</strong>
            </p>
        </div>
    )
}