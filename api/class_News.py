class News:
    def __init__(self, title, author, date, summary, url):
        self.title = title
        self.author = author
        self.date = date
        self.summary = summary
        self.url = url

    def get_title(self):
        return self.title

    def get_author(self):
        return self.author

    def get_date(self):
        return self.date

    def get_summary(self):
        return self.summary

   
    def get_url(self):
        return self.url

    def print_new(self):
        try:
            title = self.title
        except:
            title = ""

        try:
            author = self.author
        except:
            author = ""

        try:
            date = self.date
        except:
            date = ""
        try:
            desc = self.summary
        except:
            desc = ""

        result = "Título: {} \nAutor: {} \nFecha: {} \nTexto Principal: {}\nURL: {}".format(title, author, date, desc,self.url)
        return result
    
    def serialize(self):
        return {
            'title': self.title,
            'author': self.author,
            'date': self.date,
            'summary': self.summary, 
            'url': self.url
        }