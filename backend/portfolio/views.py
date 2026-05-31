from rest_framework import generics
from .models import (
    Project,
    Skill,
    About,
    Certificate,
    Tool,
    Education,
    Experience,
    ContactMessage   # ✅ ADD THIS
)

from .serializers import (
    ProjectSerializer,
    SkillSerializer,
    AboutSerializer,
    CertificateSerializer,
    ToolSerializer,
    EducationSerializer,
    ExperienceSerializer,
    ContactSerializer   # ✅ ADD THIS
)


# =========================
# PROJECT VIEWS
# =========================
class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# =========================
# SKILL VIEWS
# =========================
class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


# =========================
# ABOUT VIEW
# =========================
class AboutListView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


# =========================
# CERTIFICATE VIEW
# =========================
class CertificateListView(generics.ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer


# =========================
# TOOL VIEW
# =========================
class ToolListView(generics.ListAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer


# =========================
# EDUCATION VIEW
# =========================
class EducationListView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


# =========================
# EXPERIENCE VIEW
# =========================
class ExperienceListView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


# =========================
# CONTACT - SEND MESSAGE (KEEP AS IS)
# =========================
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def send_message(request):

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            "status": "success",
            "message": "Message sent successfully"
        })

    return Response({
        "status": "error",
        "errors": serializer.errors
    }, status=400)


# =========================
# CONTACT - GET MESSAGES (NEW FIX)
# =========================
@api_view(['GET'])
def get_messages(request):

    messages = ContactMessage.objects.all().order_by('-created_at')
    serializer = ContactSerializer(messages, many=True)

    return Response(serializer.data)