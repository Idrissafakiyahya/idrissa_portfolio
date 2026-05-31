from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required

from .models import Project, Skill, Tool, Certificate, ContactMessage


@staff_member_required
def admin_dashboard(request):

    context = {
        "projects_count": Project.objects.count(),
        "skills_count": Skill.objects.count(),
        "tools_count": Tool.objects.count(),
        "certificates_count": Certificate.objects.count(),

        "messages_count": ContactMessage.objects.count(),
        "unread_messages": ContactMessage.objects.filter(is_read=False).count(),
    }

    return render(request, "admin/dashboard.html", context)