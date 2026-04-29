import os

file_path = "css/styles.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("height: 3.5rem;", "height: 2.5rem;", 1)
content = content.replace("height: 5.46rem;", "height: 2.2rem;", 1)
content = content.replace("margin-left: -1.5rem;", "/* margin-left removed */\n}\n\n@media (min-width: 768px) {\n  .logo-img {\n    height: 3.5rem;\n  }\n  .logo-name-img {\n    height: 3rem;\n  }\n", 1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("styles.css updated")
