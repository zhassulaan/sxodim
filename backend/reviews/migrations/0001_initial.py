# Generated by Django 4.1.7 on 2023-04-24 07:52

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.CharField(max_length=200, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('category', models.CharField(max_length=50)),
                ('category_en', models.CharField(max_length=50)),
                ('main_image', models.ImageField(upload_to=None)),
                ('location', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('map', models.URLField(blank=True, null=True)),
                ('date', models.JSONField(blank=True, default=list, null=True)),
                ('time', models.CharField(blank=True, max_length=20, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None)),
                ('images', models.JSONField(blank=True, default=list, null=True)),
                ('website', models.JSONField(blank=True, default=list, null=True)),
                ('socials', models.JSONField(blank=True, default=list, null=True)),
                ('hashtags', models.JSONField(blank=True, default=list, null=True)),
                ('cover', models.URLField(blank=True, null=True)),
                ('comments', models.JSONField(blank=True, default=list, null=True)),
                ('publication_date', models.DateTimeField(auto_now_add=True)),
                ('views', models.IntegerField(default=0)),
            ],
        ),
    ]
