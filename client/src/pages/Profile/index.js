import { Tabs } from 'antd';
import TheatreList from './TheatreList';
import PageTitle from '../../components/PageTitle';
import Bookings from './Bookings';

const Profile = () => {
    // const onChange = (key) => {
    //     console.log(key);
    //   };
      const items = [
        {
          key: '1',
          label: 'Theatres',
          children: <TheatreList/>,
        },
        {
          key: '2',
          label: 'Bookings',
          children: <Bookings/>,
        },
        // {
        //   key: '3',
        //   label: 'Tab 3',
        //   children: 'Content of Tab Pane 3',
        // },
      ];

    return (
        <>
            <PageTitle title="Welcome to your Profile!"/>
            <Tabs defaultActiveKey="2" items={items} />
        </>
    )
}

export default Profile;