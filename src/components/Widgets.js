import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css'
const Widgets = () => {

  const newsArticle = (heading,subtitle,views) => (
    <div className='widgets_article'>
        <div className='widgets_articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets_articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle} - {views + " readers"}</p>
        </div>
    </div>
  )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Ede Obinna became a Programer", "Top news", 200)}
        {newsArticle("The story of Lionel Messi", "FC Barcelona", 9000)}
        {newsArticle("Coronavirus reach record high", "Top news", 3400)}
        {newsArticle("Bit coin crashes at 22k", "Crypto", 1500)}
        {newsArticle("React hits high demands", "Software", 19000)}
        {newsArticle("BB Naija grows audience", "Entertainment", 4500)}
        {newsArticle("Nigerian farm produce falls", "Economy", 11200)}
    </div>
  )
}

export default Widgets