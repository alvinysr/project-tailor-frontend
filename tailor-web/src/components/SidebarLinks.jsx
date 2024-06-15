import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

export const SidebarLinks = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "Courses",
    icon: <MenuBookIcon />,
    link: "/courses"
  },
  {
    title: "Chatbot",
    icon: <QuestionAnswerIcon />,
    link: "/chatbot"
  }
]