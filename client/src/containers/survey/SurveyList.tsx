/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { List, Space, Tag } from 'antd';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import useSurveys, { SurveyData } from 'hooks/survey/useSurveys';

function SurveyList() {
  const pageSize = 3;

  const { surveys } = useSurveys();

  return (
    <List
      itemLayout="vertical"
      pagination={{ pageSize }}
      dataSource={surveys}
      renderItem={(item) => <ListItem item={item} />}
    />
  );
}

type ListItemProps = {
  item: SurveyData;
};

function ListItem({ item }: ListItemProps) {
  const href = `/survey/${item.id}`;

  return (
    <List.Item
      key={item.id}
      css={listItemStyle}
      actions={[
        <IconText
          icon={StarOutlined}
          text={item.stars.toString()}
          key="list-vertical-star-o"
        />,
        <IconText
          icon={MessageOutlined}
          text={item.comments.toString()}
          key="list-vertical-message"
        />,
      ]}
      extra={<img className="thumbnail" alt="thumbnail" src={item.image} />}
    >
      <List.Item.Meta
        title={<a href={href}>{item.title}</a>}
        description={item.description}
      />
      {item.tags.map((text) => (
        <Tag>{text}</Tag>
      ))}
    </List.Item>
  );
}

const listItemStyle = css`
  .thumbnail {
    max-width: 15rem;
    max-height: 10rem;
  }
`;

type IconTextProps = {
  icon: React.ComponentType;
  text: string;
};

function IconText({ icon, text }: IconTextProps) {
  const Icon = icon;
  return (
    <Space>
      <Icon />
      {text}
    </Space>
  );
}

export default SurveyList;
