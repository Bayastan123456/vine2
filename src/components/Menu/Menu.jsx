import React, { useState } from 'react'
import "./Menu.css"
import img from "./13.png"
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState({});
  const navigate = useNavigate();
  
  const menuSections = [
    {
      title: "THE VILLAGE",
      subTitle: "THE VILLAGE",
      options: 
      [
        {
          category: "WINNERY",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/cantina-1.jpg",
        },
        {
          category: "VINEYARDS",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/vigneti.jpg",
        },
        {
          category: "VILLA GRADONI",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/villagradoni.jpg",
        },
        {
          category: "ELA RESTRAUNT",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/ristorante.jpeg",
        },
      ],
    },
    {
      title: "DIFFERENTLY VILLA",
      subTitle: "DIFFERENTLY VILLA",
      options: 
      [
        {
          category: "HISTORY",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/04/storia.jpg",
        },
        {
          category: "VALUES",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/05/valori.jpg",
        },
        {
          category: "PHILOSOPHY",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/filosofia.jpg",
        },
        {
          category: "RESEARCH",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/05/ricerca-2.jpg",
        },
        {
          category: "FAMILY",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/famiglia.jpg",
        },
      ],
    },
    {
      title: "FRANCIACORTA",
      subTitle: "FRANCIACORTA",
      options: 
      [
        {
          category: "TERRITORY",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/territorio.jpg",
        },
        {
          category: "METHOD",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/metodo.jpg",
        },
      ],
    },
    {
      title: "PRODUCTS",
      subTitle: "SHOP",
      options: 
      [
        {
          category: "ALL PRODUCTS",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/tutti-1.jpg",
        },
        {
          category: "FRANCIACORTA",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/franciacorta.jpg",
        },
        {
          category: "WINES",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/vini-1.jpg",
        },
        {
          category: "GRAPPE",
          img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2023/03/grappe-1.jpg",
        },
      ],
    },
  ]

  function showRightSubMenu(title){
    const section = menuSections.find(item=>item.title === title)
    if(section){
    return (
      <div>
          <h5 id='font_pathway'>{section.subTitle}</h5>
          <div className="menu_menu_rightOptions">
            <ul>
              {section.options.map((elem, index)=>(
                <li key={index} style={{listStyle:"none"}} className='menu_menu_rightOptionsList' onMouseOver={()=>setImgUrl(elem.img)}>
                  <div className="slide_wrapper">
                    <div className="relative">
                      <span>{elem.category}</span>
                    </div>
                    <div className="absolute">
                      <span>{elem.category}</span>
                    </div>
                  </div>
                  <div className="right_menuImg">
                    <img src={imgUrl} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    )
    }
  }

  return (
  <div className="menu_container">
    <div className='menu_bg'>
        <img src="https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2022/09/bg-menu-1280x720.jpg" alt="menu_bg" />
        <div className="menu_bgShadow"></div>
    </div>
    <div className="menu_menu">
        <div className="menu_menu_left">
        <h5 id='font_pathway'>MENU</h5>
        <div className="menu_menuOptions" id='font_nanum'>
          <ul>
            {menuSections.map((item, index)=>(
              <li key={index} style={{listStyle:"none"}}>
                <div className="slide_wrapper" onClick={()=>{setTitle(item.title, index)}}>
                  <div className="relative">
                    <span>{item.title}</span>
                  </div>
                  <div className="absolute">
                    <span>{item.title}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
            <div className="menu_menuSubOptions">
                <div className="slide_wrapper">
                    <div className="relative">
                      <span>SUSTAINABILITY</span>
                    </div>
                    <div className="absolute">
                      <span>SUSTAINABILITY</span>
                    </div>
                </div>
                <div className="slide_wrapper">
                    <div className="relative">
                      <span>NEWS</span>
                    </div>
                    <div className="absolute">
                      <span>NEWS</span>
                    </div>
                </div>
                <div className="slide_wrapper">
                    <div className="relative">
                      <span>HOSPITALITY</span>
                    </div>
                    <div className="absolute">
                      <span>HOSPITALITY</span>
                    </div>
                </div>
                <div className="slide_wrapper">
                    <div className="relative">
                      <span>INFORMATION</span>
                    </div>
                    <div className="absolute">
                      <span>INFORMATION</span>
                    </div>
                </div>
                <div className="slide_wrapper">
                    <div className="relative">
                      <span>HELP PAGES</span>
                    </div>
                    <div className="absolute">
                      <span>HELP PAGES</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="menu_menu_central">
            <button onClick={()=> navigate("/")}>
              <svg width="30px" height="25px" viewBox="0 0 62 55" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ededed" stroke-width="1.5" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="16" y1="16" x2="48" y2="48"></line><line x1="48" y1="16" x2="16" y2="48"></line></g></svg>  
            </button>
            <div className="central_border_up"></div>
            <img src={img} alt="arm crest" className='armcrest' />
            <div className="central_border_down"></div>
        </div>
        <div className="menu_menu_right">
          {/* <h5 id='font_pathway'>THE VILLAGE</h5>
          <div className="menu_menu_rightOptions">
            <div className="slide_wrapper">
                <div className="relative">
                  <span>WINNERY</span>
                </div>
                <div className="absolute">
                  <span>WINNERY</span>
                </div>
            </div>
            <div className="slide_wrapper">
                <div className="relative">
                  <span>VINEYARDS</span>
                </div>
                <div className="absolute">
                  <span>VINEYARDS</span>
                </div>
            </div>
            <div className="slide_wrapper">
                <div className="relative">
                  <span>VILLA GRADONI</span>
                </div>
                <div className="absolute">
                  <span>VILLA GRADONI</span>
                </div>
            </div>
            <div className="slide_wrapper">
                <div className="relative">
                  <span>ELA RESTRAUNT</span>
                </div>
                <div className="absolute">
                  <span>ELA RESTRAUNT</span>
                </div>
            </div>
          </div> */}
          {showRightSubMenu(title)}
        </div>
    </div>
  </div>
  )
}

export default Menu