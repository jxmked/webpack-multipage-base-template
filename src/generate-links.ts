interface IPageData {
  page: string;
  href: string;
}

const currentPage = "home";


const pages = document.getElementById("page-data");

const createListItem = (args: IPageData) : HTMLLIElement=> {
  const li = document.createElement("li")
  const a = document.createElement("a");
  
  a.setAttribute("href", args.href);
  a.setAttribute("rel", "noreferrer nofollow");
  a.appendChild(document.createTextNode(args.page));
  
  li.appendChild(a);
  
  return li;
}

const base = document.createElement("div");
const ul = document.createElement("ul");


if(pages??false) {
  const data: IPageData[] = [];
 
 
  try {
    Object.assign(data, JSON.parse(pages!.innerHTML))
    
    data.map((item) => createListItem(item)).forEach((li) => {
      ul.appendChild(li)
    })
    
    base.setAttribute("id", "panel")
    base.appendChild(ul);
    
    document.body.appendChild(base)
    
  } catch(err) {
    console.error("Unable to generate sub address");
  }
}



