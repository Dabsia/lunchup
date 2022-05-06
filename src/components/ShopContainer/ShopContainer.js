import React, {useState, useEffect} from 'react'
import { vendors } from '../../pages/Shop/Vendors'
import ShopVendor from '../ShopVendor/ShopVendor'
import './ShopContainer.css'

const ShopContainer = ({vendorsInput}) => {

    const [shopVendor, setShopVendor] = useState([])

    useEffect(() => {
        setShopVendor(vendors)
    }, [])

    
    const filteredShopVendors = shopVendor.filter(vendor => (
    vendor.name.toLowerCase().includes(vendorsInput.toLowerCase())))
    

  return (
    <div className='vendors'>
        {
            filteredShopVendors.map(vendor => {
                return (
                    <ShopVendor key = {vendor.id} name = {vendor.name} location = {vendor.location} logo = {vendor.logo} />
                )
            })
        }
    </div>
  )
}

export default ShopContainer


/* 
const filteredMonsters = monsters.filter(monster => (
    monster.name.toLowerCase().includes(searchfield.toLowerCase())))
*/