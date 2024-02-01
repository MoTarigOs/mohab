import { getServiceDetails } from "@utils/Logic";

export async function generateMetadata({params}){
    
    const item = getServiceDetails(params.itemTitle);
    
    return { 
        title: item.title,
        description: item.desc
    };
    
};

const Layout = ({ children }) => {
  return (
    
    <main>{children}</main>

  )
};

export default Layout;