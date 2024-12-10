import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from'./components/Btn';
import Profile from './components/Profile';
  

function App() {
  const Profiles =[
  {
   name:'prince',
   img:'https://avatars.githubusercontent.com/u/111479652?s=48&v=4',
   desc:'I am studying in BSCIT',
   link:'https://github.com/pri810',
   btn:'open profile'},
  
  {
   name:'mohammad',
   img:'https://avatars.githubusercontent.com/u/185525438?v=4',
   desc:'i am studying in BCA',
   link:'https://github.com/gaghamohammad',
   btn:'open profile'},
  
  {
   name:'saad',
   img:'https://avatars.githubusercontent.com/u/182938196?v=4',
   desc:'I am studying in BCA',
   link:'https://github.com/shk-Sam',
   btn:'open profile'},
   
   {
    name:'rumana',
    img:'https://avatars.githubusercontent.com/u/185526264?v=4',
    desc:'I am studying in 12th',
    link:'https://github.com/rumanamotiwala',
    btn:'open profile'},

    {
      name:'tehseen',
      img:'https://avatars.githubusercontent.com/u/182941013?v=4',
      desc:'I am post graduate..',
      link:'https://github.com/jiyashah26',
      btn:'open profile'},

      {
        name:'nawaf',
        img:'https://avatars.githubusercontent.com/u/182943003?v=4',
        desc:'I am studying in 11th',
        link:'https://github.com/Sknawaf05',
        btn:'open profile'},

        
      {
        name:'vocab',
        img:'https://avatars.githubusercontent.com/u/185526098?v=4',
        desc:'I am studying in bscit',
        link:'https://github.com/Vocabstudents',
        btn:'open profile'},

        {
          name:'moin',
          img:'https://avatars.githubusercontent.com/u/186063909?v=4',
          desc:'I am studying in 7th',
          link:'https://github.com/moinuddin-4678',
          btn:'open profile'},

          {
            name:'basheer',
            img:'https://avatars.githubusercontent.com/u/182937907?v=4',
            desc:'I am studying in BCA',
            link:'https://github.com/Basheer107',
            btn:'open profile'},

  ]
  return (
    <div className='container'>
       <h1>Profile</h1>
       <div className='row'>
       {/* <Profile name='prince' location="mumbra"/> */}
       {
        Profiles.map((profile)=>{
          return <Profile profile={profile}/>
        })
       }
       </div>
      {/* <Btn name="log in"/> */}
      {/* <Btn name="log out"/> */}
      </div>
  );
}

export default App;
