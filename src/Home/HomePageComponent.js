import React from 'react'

function HomePageComponent(props) {
    
    return (
        
        <div className="Api-component">
            <h1 className="api-header1">hello {props.posts.name}</h1>
            <p className="Api-paragraph">
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.
                 Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen
                  een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus
                   te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen 
                   in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset 
                   vellen met Lorem
            </p>
             <span className="api-span">writer: {props.posts.name}</span>
        </div>
    )
}

export default HomePageComponent

