import requests

BASE_URL = "https://jsonplaceholder.typicode.com"

# #--- PART 1: POSTS ---

# res = requests.get(f"{BASE_URL}/posts")
# print(f"Posts Count: {len(res.json())}, Status: {res.status_code}")

# res = requests.get(f"{BASE_URL}/posts/1")
# print(res.json())

# res = requests.get(f"{BASE_URL}/posts", params={"userId": 1})
# print([post['title'] for post in res.json()])

# payload = {"title": "foo", "body": "bar", "userId": 1}
# res = requests.post(f"{BASE_URL}/posts", json=payload)
# print(f"Status: {res.status_code}, Response: {res.json()}")

# payload = {"id": 1, "title": "updated", "body": "full", "userId": 1}
# res = requests.put(f"{BASE_URL}/posts/1", json=payload)
# print(res.json())

# res = requests.patch(f"{BASE_URL}/posts/1", json={"title": "new title"})
# print(res.json()['title'])

# res = requests.delete(f"{BASE_URL}/posts/1")
# print(f"Delete Status: {res.status_code}")

# res = requests.get(f"{BASE_URL}/posts/1/comments")
# print([c['email'] for c in res.json()])


# #--- PART 2: COMMENTS ---

# res = requests.get(f"{BASE_URL}/comments")
# print(f"Comments Count: {len(res.json())}")

# res = requests.get(f"{BASE_URL}/comments/1")
# print(res.json())

# res = requests.get(f"{BASE_URL}/comments", params={"postId": 1})
# print([c['email'] for c in res.json()])

# payload = {"postId": 1, "name": "test", "email": "a@b.com", "body": "hello"}
# res = requests.post(f"{BASE_URL}/comments", json=payload)
# print(res.json())

# res = requests.delete(f"{BASE_URL}/comments/1")
# print(f"Status: {res.status_code}")


# #--- PART 3: ALBUMS ---

# res = requests.get(f"{BASE_URL}/albums")
# print(f"Albums Count: {len(res.json())}")

# res = requests.get(f"{BASE_URL}/albums/1")
# print(res.json())

# res = requests.get(f"{BASE_URL}/albums/1/photos")
# print([p['title'] for p in res.json()])

# res = requests.post(f"{BASE_URL}/albums", json={"title": "new album", "userId": 1})
# print(res.json())

# res = requests.delete(f"{BASE_URL}/albums/1")
# print(f"Status: {res.status_code}")


# #--- PART 4: PHOTOS ---

# res = requests.get(f"{BASE_URL}/photos")
# print(res.json()[:5])

# res = requests.get(f"{BASE_URL}/photos/1")
# print(res.json())

# res = requests.get(f"{BASE_URL}/photos", params={"albumId": 1})
# print([p['url'] for p in res.json()])

# payload = {"albumId": 1, "title": "pic", "url": "http://site.com/1", "thumbnailUrl": "http://site.com/t1"}
# res = requests.post(f"{BASE_URL}/photos", json=payload)
# print(res.json())

# res = requests.delete(f"{BASE_URL}/photos/1")
# print(f"Status: {res.status_code}")


# #--- PART 5: TODOS ---

# res = requests.get(f"{BASE_URL}/todos")
# print(f"Todos Count: {len(res.json())}")

# res = requests.get(f"{BASE_URL}/todos/1")
# print(res.json())

# res = requests.get(f"{BASE_URL}/todos", params={"userId": 1})
# print([t['title'] for t in res.json()])

# res = requests.get(f"{BASE_URL}/todos", params={"completed": "true"})
# print([t['title'] for t in res.json()])

# payload = {"userId": 1, "title": "task", "completed": False}
# res = requests.post(f"{BASE_URL}/todos", json=payload)
# print(res.json())

# res = requests.patch(f"{BASE_URL}/todos/1", json={"completed": True})
# print(res.json())

# res = requests.delete(f"{BASE_URL}/todos/1")
# print(f"Status: {res.status_code}")


# #--- PART 6: USERS ---

# res = requests.get(f"{BASE_URL}/users")
# for u in res.json():
#     print(f"Name: {u['name']}, Email: {u['email']}")

# res = requests.get(f"{BASE_URL}/users/1")
# print(f"City: {res.json()['address']['city']}")

# res = requests.get(f"{BASE_URL}/users/1/posts")
# print([p['title'] for p in res.json()])

# res = requests.get(f"{BASE_URL}/users/1/todos")
# print([t['title'] for t in res.json()])

# res = requests.get(f"{BASE_URL}/users/1/albums")
# print([a['title'] for a in res.json()])

# payload = {"name": "David", "username": "davids", "email": "d@s.com"}
# res = requests.post(f"{BASE_URL}/users", json=payload)
# print(res.json())

# res = requests.delete(f"{BASE_URL}/users/1")
# print(f"Status: {res.status_code}")