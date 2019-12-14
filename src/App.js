import React from 'react';
import './App.css';
// import Split from './composition/Split';
// import Tooltip from './composition/Tooltip';
// import Messages from './messages/Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tab from './state/Tab';
import Accordian from './state-drills/Accordian';

function App(props) {
  const section = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];
  
  return (
    <Accordian sections={section} />
  )
}

// function App() {
//   // Old code
//   const firstTooltip = (
//     <Tooltip message='tooltip message' color='hotpink'>
//       ipsum
//       </Tooltip>
//   )
//   const secondTooltip = (
//     <Tooltip message='another tooltip message' color='#126BCC'>
//       officiis
//       </Tooltip>
//   )

//   const tabsProp = [
//     {
//       name: 'First tab',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
//     },
//     {
//       name: 'Second tab',
//       content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//     },
//     {
//       name: 'Third tab',
//       content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
//     },
//   ];

//   return (
//     <main className='App'>
//       <Split className="left" flexBasis={2}>
//         This is the content of the {firstTooltip} split component.
//           <TheDate />
//         <Counter count={123} step={37} />
//         <Tab tabs={tabsProp}/>
//       </Split>
//       <Tooltip message='one more tooltip message'>
//         Necessitatibus?
//         </Tooltip>
//       <Split className="right">
//         This is the content of {secondTooltip} the split component.
//           <Messages name="Messages" unread={0} />
//         <Messages name="Notifications" unread={10} />
//       </Split>
//     </main>
//   );
// }

export default App;
