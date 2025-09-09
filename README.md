# Image Processing Project

## scripts

- build: npm run build
- start: npm run start
- test: npm run test

## endpoints

project main endpoint:
GET /api/images?filename={imageName}&width={number}&height={number}

## notes:

- I used the same images in the repo: https://github.com/udacity/cd0292-building-a-server-project-starter/tree/master
- The origin images store in images/full and the processed images appears in images/thumb
- Resize endpoint example: http://localhost:3000/api/images?filename=fjord&width=200&height=200
- Placeholder example: http://localhost:3000/api/placeholder?width=400&height=200&text=udacity&bg=%23dd00ff
