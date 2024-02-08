class New:
    def __init__(self, title, summary, author, date, url):
        self.title = title
        self.summary = summary
        self.author = author
        self.date = date
        self.url = url
        
    def get_json(self):
        return {
            'title': self.title,
            'summary': self.summary,
            'author': self.author,
            'date': self.date,
            'url': self.url
        }
