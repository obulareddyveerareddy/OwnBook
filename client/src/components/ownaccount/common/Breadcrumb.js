import React from 'react';

const Breadcrumb = ({params}) => {
    console.log('~~~~~~~~~~~~~~~ >>> Breadcrumb ', params);
    return(
        <ul className="breadcrumb black-text text-darken-2">
            {
                params.map((item, index)=>{
                    if((index+1) === params.length){
                        return <li>{item.displayName}</li>                        
                    }else{
                        return <li className="valign-wrapper"><a href={item.linkPath}><i class="material-icons" style={{paddingTop:'0px'}}>{item.iconClassName}</i>{item.displayName}</a></li>    
                    }
                })
            }
        </ul>
    )
}

export default Breadcrumb;