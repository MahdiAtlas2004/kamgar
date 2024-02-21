import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//This component scroll the page to the top whenever someone click the menu links. 
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTopOnMount;