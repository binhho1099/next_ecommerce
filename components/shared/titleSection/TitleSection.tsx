import React from 'react';
import { StarTwoTone } from '@ant-design/icons';

interface PropsTitleSection {
  title: string;
  color?: string;
  star?: boolean;
}

function TitleSection({
  title,
  color = '#302C2C',
  star = true,
}: PropsTitleSection) {
  const colorStar = '#ffcb3e';
  return (
    <h1 style={{ color: `${color}`, fontSize: 24, marginBottom: 20 }}>
      {star && <StarTwoTone twoToneColor={colorStar} />}
      {title}
      {star && <StarTwoTone twoToneColor={colorStar} />}
    </h1>
  );
}

export default TitleSection;
