import { useContext } from "react"
import { ContactContext } from "../../App"
import { Link } from "react-router-dom";


function ContactList () {

    const context = useContext(ContactContext)
    console.log('contactlist')
    console.log(context.contacts)


    return(
        <ul>
            {context.contacts.map((contact, index) => (
                <li key={index}>
                    <img src={contact.profileImage} />
                    <p>{contact.firstName} {contact.lastName} </p>
                    <Link to={`/contacts/view/${contact.id}`}>View</Link>
                </li>
            ))}
        </ul>
    )
}

export default ContactList