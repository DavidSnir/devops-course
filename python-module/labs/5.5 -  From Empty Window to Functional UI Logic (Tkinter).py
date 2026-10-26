import tkinter as tk


def talk_back():
    user_answer=user_entry.get()
    answer.config(text=f"Yea, I'm {user_answer} too")

#1
root = tk.Tk()
root.title("The Greeter")
root.geometry("300x200")

question = tk.Label(root,text="Hello, how are you?")
answer = tk.Label(root,text="", fg="green")
user_entry = tk.Entry(root,width=300)
done_button = tk.Button(root, text="Done!",command=talk_back)


question.pack()
user_entry.pack()
done_button.pack()
answer.pack()

root.mainloop()