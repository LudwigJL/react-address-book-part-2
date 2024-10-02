import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../../App";


export default function ContactListItem( ) {
    const context = useContext(ContactContext)
    const [match, setMatch] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if(context.contacts && id){
            const matchingContact = context.contacts.find((contact) => Number(contact.id) === Number(id));
            setMatch(matchingContact);
        }
    }, [context.contacts, id])

    if(!match) return <p>Loading... </p>
  
    return (
        <>
            <h2>{match.firstName}</h2>
            <p>{match.street} {match.city}</p>
        </>
    );
}