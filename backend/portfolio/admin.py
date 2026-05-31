from django.contrib import admin
from .models import (
    Project,
    Skill,
    About,
    Certificate,
    Tool,
    Education,
    Experience,
    ContactMessage
)

# =========================
# PROJECT ADMIN
# =========================
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'github_link', 'live_link', 'created_at')
    search_fields = ('title',)
    list_filter = ('created_at',)
    list_per_page = 10
    ordering = ('-created_at',)


# =========================
# SKILL ADMIN
# =========================
@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'level')
    search_fields = ('name',)
    list_filter = ('level',)
    list_per_page = 10


# =========================
# ABOUT ADMIN
# =========================
@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'location')
    search_fields = ('full_name', 'email')
    list_per_page = 10


# =========================
# CERTIFICATE ADMIN
# =========================
@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('name', 'source', 'year')
    search_fields = ('name', 'source')
    list_filter = ('year',)
    list_per_page = 10
    ordering = ('-year',)


# =========================
# TOOL ADMIN
# =========================
@admin.register(Tool)
class ToolAdmin(admin.ModelAdmin):
    list_display = ('label',)
    search_fields = ('label',)
    list_per_page = 10


# =========================
# EDUCATION ADMIN
# =========================
@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('institution', 'course', 'start_year', 'end_year')
    search_fields = ('institution', 'course')
    list_filter = ('start_year', 'end_year')
    list_per_page = 10
    ordering = ('-start_year',)


# =========================
# EXPERIENCE ADMIN
# =========================
@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company', 'role', 'start_year', 'end_year')
    search_fields = ('company', 'role')
    list_filter = ('start_year', 'end_year')
    list_per_page = 10
    ordering = ('-start_year',)


# =========================
# CONTACT MESSAGE ADMIN (INBOX STYLE)
# =========================
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'is_read', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('is_read', 'created_at')
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')
    list_per_page = 10
    ordering = ('-created_at',)

    # MARK AS READ ACTION (GMAIL STYLE)
    actions = ['mark_as_read']

    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)