# Generated by Django 4.1.7 on 2023-04-13 08:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_alter_event_website'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='comments',
        ),
        migrations.RemoveField(
            model_name='event',
            name='date',
        ),
        migrations.RemoveField(
            model_name='event',
            name='hashtags',
        ),
        migrations.RemoveField(
            model_name='event',
            name='website',
        ),
    ]
