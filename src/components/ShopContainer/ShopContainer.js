import React, {useState, useEffect} from 'react'
import { shopVendorsList } from '../../pages/Shop/Vendors'
import ShopVendor from '../ShopVendor/ShopVendor'
import './ShopContainer.css'

const ShopContainer = ({vendorsInput}) => {

    const [shopVendor, setShopVendor] = useState([])

    useEffect(() => {
        setShopVendor(shopVendorsList)
    }, [])

    
    const filteredShopVendors = shopVendor.filter(vendor => (
    vendor.name.toLowerCase().includes(vendorsInput.toLowerCase())))
    

  return (
    <div className='vendors'>
        {
            filteredShopVendors.map(vendor => {
                return (
                    <ShopVendor key = {vendor.id} id = {vendor.id} name = {vendor.name} path = {vendor.path} location = {vendor.location} logo = {vendor.logo} />
                )
            })
        }
    </div>
  )
}

export default ShopContainer


