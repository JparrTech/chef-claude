import ChefClaudeIcon from '../assets/chef-claude-icon.svg'

export default function Header(){
    return(
        <header>
            <img src={ChefClaudeIcon} alt="chef claude icon" className='chef-claude-icon' />  
            <h2 className='header-title'>Chef Claude</h2>   
        </header>



    )
}