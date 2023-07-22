import { NextResponse } from 'next/server';

// Dummy data
const posts = [
  {
    "title": "Introduction to Dummy Data",
    "slug": "introduction-to-dummy-data",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mi euismod, posuere odio sit amet, commodo elit. Etiam dictum, urna vel varius tincidunt, erat elit viverra lectus, eget fermentum velit sapien sit amet nisi."
  },
  {
    "title": "Getting Started with Mock Content",
    "slug": "getting-started-with-mock-content",
    "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In a tincidunt massa, in consequat velit. Sed auctor, quam nec fermentum venenatis, ante tellus malesuada metus, quis euismod purus lorem ac turpis."
  },
  {
    "title": "Dummy Data for Web Development",
    "slug": "dummy-data-for-web-development",
    "content": "Vestibulum nec gravida velit. Suspendisse vel commodo ipsum. Aenean eu odio venenatis, tristique nunc at, venenatis nulla. Praesent egestas, nulla in lacinia rhoncus, massa dolor vulputate erat, vitae viverra purus felis id nisi."
  },
  {
    "title": "Generating Randomized Slugs",
    "slug": "generating-randomized-slugs",
    "content": "Duis quis ex sed mi eleifend varius. Suspendisse at purus euismod, feugiat justo in, pellentesque ex. Ut ut metus eu odio blandit bibendum. Donec varius, felis ut aliquet congue, lectus felis varius tellus, at volutpat enim purus a est."
  },
  {
    "title": "Dummy Data for Machine Learning",
    "slug": "dummy-data-for-machine-learning",
    "content": "Fusce vel tristique mi, in hendrerit nisi. Ut a lacus in turpis luctus dictum. Nullam quis tellus in nisi auctor iaculis. Proin consequat urna ut nulla pharetra aliquet. Integer sit amet posuere neque, ac sagittis urna."
  },
  {
    "title": "Dummy Data for Machine Learning 2",
    "slug": "dummy-data-for-machine-learning-2",
    "content": "Fusce vel tristique mi, in hendrerit nisi. Ut a lacus in turpis luctus dictum. Nullam quis tellus in nisi auctor iaculis. Proin consequat urna ut nulla pharetra aliquet. Integer sit amet posuere neque, ac sagittis urna."
  },
  {
    "title": "Best Practices for Using Dummy Content",
    "slug": "best-practices-for-using-dummy-content",
    "content": "Mauris semper, massa ut aliquet fermentum, velit urna rhoncus mauris, eget aliquet dui elit ac eros. Suspendisse potenti. Nunc lacinia dui at tristique eleifend. Sed et tellus sit amet massa interdum dapibus. Cras venenatis semper tortor, nec ullamcorper augue sagittis eget."
  }
]


export async function GET() {
  return NextResponse.json(posts);
}
