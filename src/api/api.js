import axios from "axios";

const defaultOptions = {
  baseURL: process.env.REACT_APP_URL_SERVER_BASE,
  headers: {
    "Content-Type": "application/json",
  },
};

let instance = axios.create(defaultOptions);

async function getToken() {
  const response = await instance
    .post("/api-auth/", {
      username: process.env.REACT_APP_USER_SERVER,
      password: process.env.REACT_APP_USER_PASS,
    })
    .then((result) => {
      localStorage["tokenLwandi"] = result.data.token;
      return result;
    })
    .catch((error) => {
      return error;
    });
}

const promise = getToken();

let myToken = localStorage["tokenLwandi"] || "default";

instance.defaults.headers.common["Authorization"] = myToken
  ? `Token ${myToken}`
  : "";

export async function getPosts(recents = false) {
  let response = await instance.get("/posts");

  let posts = response.data;

  if (recents) posts = posts.slice(0, 3);

  return posts;
}

export async function getPost(slug) {
  let response = await instance.get(`/posts/${slug}`);
  return response.data;
}

export async function getAlbums(recents = false) {
  let albums = await instance.get("/albums");

  for (let album of albums.data) {
    let photos = await instance.get(`/photos?album_fk=${album.id}`);
    album.cover = photos.data[0].path;
  }

  if (recents) albums.data = albums.data.slice(0, 4);

  return albums.data;
}

export async function getAlbum(id) {
  let album = await instance.get(`/albums/${id}`);
  return album.data;
}

export async function getPhotos(album_id) {
  let photos = await instance.get(`/photos?album_fk=${album_id}`);
  return photos.data;
}
