from django.db.models import Model, CharField, ForeignKey, CASCADE, DO_NOTHING


class DictionaryVal(Model):
    key = CharField(max_length=20, db_index=True)
    value = CharField(max_length=20, db_index=True)


class Dictionary(Model):
    name = CharField(max_length=20)
    values = ForeignKey(DictionaryVal, db_index=True, on_delete=CASCADE)
