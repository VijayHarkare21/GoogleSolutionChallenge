from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length = 50)
    address = models.TextField(max_length=255)
    contact = models.BigIntegerField()

    def __str__(self):
        return self.name

class Disaster(models.Model):
    title = models.CharField(max_length = 50)
    date = models.DateField()
    place = models.CharField(max_length = 50)
    active = models.BooleanField(default = True)
    
    def __str__(self):
        return self.title

class Volunteer(models.Model):
    organization = models.ForeignKey(Organization, related_name = 'org_volunteer' , on_delete=models.CASCADE, null = True)
    disaster = models.ForeignKey(Disaster, related_name = 'disaster_volunteer' , on_delete=models.CASCADE)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length = 10)
    phone = models.BigIntegerField(unique = True)
    email = models.EmailField()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Donation(models.Model):
    organization = models.ForeignKey(Organization, related_name = 'org_donation' , on_delete=models.CASCADE, null = True)
    disaster = models.ForeignKey(Disaster, related_name = 'disaster_donation' , on_delete=models.CASCADE)
    name = models.CharField(max_length = 100)
    phone = models.PositiveBigIntegerField(unique = True)
    email = models.EmailField()
    amount = models.IntegerField()
    success = models.BooleanField(default = False)

    def __str__(self):
        return f"{self.name} - {self.amount}"

class Report(models.Model):
    disaster = models.ForeignKey(Disaster, related_name = 'disaster_report' , on_delete=models.CASCADE)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length = 10)
    phone = models.BigIntegerField(unique = True)
    email = models.EmailField()
    photo = models.ImageField(upload_to = 'missing', null = True)
    description = models.TextField(max_length = 255,blank = True,null=True)
    found = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Found(models.Model):
    report = models.ForeignKey(Report, on_delete=models.CASCADE, related_name = 'report_found')
    address = models.TextField(max_length=255)
    contact = models.BigIntegerField(unique = True)

    def __str__(self):
        return f"{self.report} - {self.contact}"

class Order(models.Model):
    order_product = models.CharField(max_length=100)
    order_amount = models.CharField(max_length=25)
    order_payment_id = models.CharField(max_length=100)
    isPaid = models.BooleanField(default=False)
    order_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.order_product

class Payment(models.Model):
    razorpay_payment_id = models.CharField(max_length=23)
    razorpay_order_id = models.CharField(max_length=25, primary_key=True)
    razorpay_signature = models.CharField(max_length=70)