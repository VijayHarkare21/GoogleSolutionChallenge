# Generated by Django 4.0.3 on 2022-04-09 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('disaster', '0012_remove_order_receipt'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='amount',
        ),
        migrations.RemoveField(
            model_name='order',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='order',
            name='currency',
        ),
        migrations.RemoveField(
            model_name='order',
            name='entity',
        ),
        migrations.RemoveField(
            model_name='order',
            name='status',
        ),
        migrations.AddField(
            model_name='order',
            name='isPaid',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='order_amount',
            field=models.CharField(default=100, max_length=25),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='order_date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='order',
            name='order_payment_id',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='order_product',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
