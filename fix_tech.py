f = r'c:\Users\HirthickSivashanmuga\Music\eventora-main\eventora-main\js\app.js'
with open(f, 'r', encoding='utf-8') as file:
    c = file.read()

old = """technologies: {
      'Frontend': ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      'Backend': ['Node.js', 'Python', '.NET', 'Java', 'Spring Boot', 'Django', 'FastAPI', 'Express.js', 'Go', 'Rust'],
      'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      'Databases': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'SQLite'],
      'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Google Cloud', 'Azure', 'CI/CD', 'Terraform', 'Jenkins']
    },"""

new = """technologies: {
      'Frontend': ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      'Backend': ['Node.js', 'Python', 'Java', '.NET', 'Go', 'Rust'],
      'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin'],
      'Databases': ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'SQLite'],
      'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Google Cloud', 'Azure']
    },"""

if old in c:
    c = c.replace(old, new)
    with open(f, 'w', encoding='utf-8') as file:
        file.write(c)
    print('Done')
else:
    print('Not found - trying fallback')
    # Try to find and print what's actually there
    idx = c.find('technologies: {')
    if idx != -1:
        print(repr(c[idx:idx+400]))
