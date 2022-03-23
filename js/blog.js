const posts = [
  {
    title: 'It is Post #1',
    date: 'March 23, 2022',
    author: 'Nouruddin',
    contents:
      " Nour Gaad is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'It is Post #2',
    date: 'March 22, 2022',
    author: 'Diaa',
    contents:
      "Diaa Gaad is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'It is Post #3',
    date: 'March 21, 2022',
    author: 'Karam',
    contents:
      "Karam Gaad is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];


for (var y = 0; y<3; y++ ){
  document.getElementById('Title-' + y).innerText = posts[y].title;
  document.getElementById('Date-' + y).innerText = posts[y].date;
  document.getElementById('Author-' + y).innerText = posts[y].author;
  document.getElementById('Content-' + y).innerText = posts[y].contents;
}