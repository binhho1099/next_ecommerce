import React, { useEffect, useState } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
function BackTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div
      className={`to-top ${visible && 'show'}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <VerticalAlignTopOutlined />
    </div>
  );
}

export default BackTop;
