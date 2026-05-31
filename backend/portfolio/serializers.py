from rest_framework import serializers
from .models import (
    Project,
    Skill,
    About,
    Certificate,
    Tool,
    Education,
    Experience
)


# =========================
# PROJECT SERIALIZER
# =========================
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


# =========================
# SKILL SERIALIZER
# =========================
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


# =========================
# ABOUT SERIALIZER
# =========================
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'


# =========================
# CERTIFICATE SERIALIZER
# =========================
class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = '__all__'


# =========================
# TOOL SERIALIZER
# =========================
class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


# =========================
# EDUCATION SERIALIZER
# =========================
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


# =========================
# EXPERIENCE SERIALIZER
# =========================
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'




from .models import ContactMessage

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'