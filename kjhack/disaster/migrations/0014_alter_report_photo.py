# Generated by Django 4.0.3 on 2022-04-09 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('disaster', '0013_remove_order_amount_remove_order_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='photo',
            field=models.ImageField(null=True, upload_to='missing'),
        ),
    ]
