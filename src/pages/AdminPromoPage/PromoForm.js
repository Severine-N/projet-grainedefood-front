import React, { useEffect, useState } from 'react';

import { Button, Form } from 'semantic-ui-react'
import './styles.scss';
import api from 'src/api';


const PromoForm = ({ promoCode, promoPourcent, promoStartDate, promoEndDate, setNewPromoCode, setNewPromoPourcent, setNewPromoStartDate, setNewPromoEndDate }) => {

//const [ newPromo, setNewPromo ] = useState([])


const handleSubmit = (event) => {  
    event.preventDefault();
    api.post('/promo', {
      "code": promoCode,
      "pourcent": promoPourcent,
      "start_date": promoStartDate,
      "end_date": promoEndDate
    })
    .then((response) => response.data.promo)
    .then(() => window.location.reload())
    .catch((error) => console.error(error))
    };

/*console.log(promosData)*/
/*console.log(newPromo)*/

  return (
    <Form className="promo-form" onSubmit={handleSubmit}>
      <Form.Field>
        <input 
          placeholder='Code'
          value={promoCode}
          onChange={(e) => setNewPromoCode(e.target.value)} 
         />
      </Form.Field>
      <Form.Field>
        <input 
          placeholder='%' 
          value={promoPourcent}
          onChange={(e) => setNewPromoPourcent(e.target.value)} 
        />
      </Form.Field>
      <Form.Field>
        <input 
          placeholder='Date de début' 
          value={promoStartDate}
          onChange={(e) => setNewPromoStartDate(e.target.value)}  
          />
      </Form.Field>
      <Form.Field>
        <input 
            placeholder='Date de fin' 
           value={promoEndDate}
          onChange={(e) => setNewPromoEndDate(e.target.value)}             
            />
      </Form.Field>
      <Button type='submit' color='green'>Enregistrer le code promo</Button>
    </Form>
  )
}

export default PromoForm;
