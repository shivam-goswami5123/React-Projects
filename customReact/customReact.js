function customRender(reactElement,container){
    /*
    const domElem=document.createElement(reactElement.type);
    domElem.innerHTML=reactElement.children;
    domElem.setAttribute('href',reactElement.props.href);
    domElem.setAttribute('target',reactElement.props.target);
    container.appendChild(domElem);
    */
    const domElem=document.createElement(reactElement.type);
    domElem.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElem.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElem);
}


const mainContainer=document.getElementById("root");
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click Me to open Google"
}

customRender(reactElement,mainContainer);