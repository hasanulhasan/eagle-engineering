import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Eagle-Engineering`;
  }, [title])
};

export default useTitle;