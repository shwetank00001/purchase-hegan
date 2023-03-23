import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {FaIndustry, FaRegMoneyBillAlt, } from 'react-icons/fa'
import { FcSettings, FcRules, FcDataConfiguration, FcBullish, FcFactory, FcFile} from "react-icons/fc";
import './Header.css'

const Header = () => {

  const [flip, setFlip] = React.useState(false)
  function handleChange(){
    setFlip(!flip)
  }


  return (

    <div>
      <button className='sidebar-button' onClick={handleChange}>Close</button>
{   flip &&  <div className='sidebar'>
            <Sidebar>
                <Menu>
                    <SubMenu icon={<FcFactory />} label="Product Name">
                    <MenuItem > Generate </MenuItem>
                    <MenuItem> Product List</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaRegMoneyBillAlt />} label="Purchase">
                    <MenuItem> Purchase Entry </MenuItem>
                    <MenuItem> Purchase List </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FcFile />} label="Sale">
                    <MenuItem> Sale Entry </MenuItem>
                    <MenuItem> Sale List </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FcRules />} label="Reports">
                    <MenuItem> Sale Report </MenuItem>
                    <MenuItem> Goods Return Report </MenuItem>
                    <MenuItem> CN Voucher Report </MenuItem>
                    <MenuItem> Purchase Report </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FcBullish />} label="Stock">
                    <MenuItem> Stock available  </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaIndustry />} label="Bank">
                    <MenuItem> Bank Details </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FcDataConfiguration />} label="Accounts">
                    <MenuItem> Ledger Entry </MenuItem>
                    <MenuItem> Ledger List </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FcSettings />} label="Setting">
                    <MenuItem> Invoice Assign </MenuItem>
                    <MenuItem> Backup </MenuItem>
                    <MenuItem> Logout </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>}
    </div>
  )
}

export default Header