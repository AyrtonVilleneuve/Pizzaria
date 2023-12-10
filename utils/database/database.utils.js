import { child, get, ref } from "firebase/database"
import { firebaseDatabase } from "../../firebaseconfig"
import { PizzaFlavour } from "../../models/pizzaFlavour"




export const GetPizzas = async () => {
    const databaseReference = ref(firebaseDatabase)

    const data = await get(child(databaseReference,'sabores'))

    try {
        if(data.exists()){

            let PizzaFlavours = []
    
            data.forEach((flavour) => {
                 const {id,description,image,name,price} = flavour.val()
                 PizzaFlavours.push(
                    new PizzaFlavour(id,description,image,name,price)
                 )
             })
    
             return PizzaFlavours
    
        
         }else{
             console.log('Nenhum dado no banco de dados')
         }  
    } catch (error) {
        console.error(error)
    }
}