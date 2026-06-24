const container = document.getElementById("courseContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");
const resetBtn = document.getElementById("resetBtn");

function renderCourses(courseList)
{
    if(container == null) return;

    let html = "";

    for(let i = 0; i < courseList.length; i++)
    {
        html += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow course-card">
                <img src="${courseList[i].image}" class="card-img-top" alt="${courseList[i].title}">

                <div class="card-body">
                    <span class="badge bg-primary">${courseList[i].category}</span>
                    <span class="badge bg-success">${courseList[i].level}</span>

                    <h5 class="mt-2">${courseList[i].title}</h5>

                    <p>${courseList[i].description}</p>

                    <p><strong>Ngày học:</strong> ${courseList[i].date}</p>

                    <button class="btn btn-primary btn-sm" onclick="showDetail(${courseList[i].id})">
                        Xem chi tiết
                    </button>

                    <a href="register.html" class="btn btn-success btn-sm">
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
        `;
    }

    container.innerHTML = html;
}

function showDetail(id)
{
    let selectedCourse = null;

    for(let i = 0; i < courses.length; i++)
    {
        if(courses[i].id == id)
        {
            selectedCourse = courses[i];
        }
    }

    document.getElementById("modalTitle").innerText = selectedCourse.title;
    document.getElementById("modalImage").src = selectedCourse.image;
    document.getElementById("modalDetail").innerText = selectedCourse.detail;
    document.getElementById("modalCategory").innerText = selectedCourse.category;
    document.getElementById("modalLevel").innerText = selectedCourse.level;
    document.getElementById("modalDate").innerText = selectedCourse.date;

    let modal = new bootstrap.Modal(document.getElementById("courseModal"));
    modal.show();
}

function filterCourses()
{
    let keyword = searchInput.value.toLowerCase();
    let category = categoryFilter.value;
    let level = levelFilter.value;

    let result = [];

    for(let i = 0; i < courses.length; i++)
    {
        let matchName = courses[i].title.toLowerCase().includes(keyword);
        let matchCategory = category == "" || courses[i].category == category;
        let matchLevel = level == "" || courses[i].level == level;

        if(matchName && matchCategory && matchLevel)
        {
            result.push(courses[i]);
        }
    }

    renderCourses(result);
}

if(container != null)
{
    searchInput.addEventListener("input", filterCourses);
    categoryFilter.addEventListener("change", filterCourses);
    levelFilter.addEventListener("change", filterCourses);

    resetBtn.addEventListener("click", function()
    {
        searchInput.value = "";
        categoryFilter.value = "";
        levelFilter.value = "";

        renderCourses(courses);
    });

    renderCourses(courses);
}

/* REGISTER */
const registerForm = document.getElementById("registerForm");
const courseSelect = document.getElementById("courseSelect");

if(courseSelect != null)
{
    for(let i = 0; i < courses.length; i++)
    {
        courseSelect.innerHTML += `
            <option value="${courses[i].title}">
                ${courses[i].title}
            </option>
        `;
    }
}

if(registerForm != null)
{
    registerForm.addEventListener("submit", function(event)
    {
        event.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let className = document.getElementById("className").value.trim();
        let selectedCourse = document.getElementById("courseSelect").value;
        let note = document.getElementById("note").value.trim();

        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("classError").innerText = "";
        document.getElementById("courseError").innerText = "";

        let isValid = true;

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneRegex = /^[0-9]{9,11}$/;

        if(fullName.length < 3)
        {
            document.getElementById("nameError").innerText = "Họ tên phải có ít nhất 3 ký tự";
            isValid = false;
        }

        if(email == "" || !emailRegex.test(email))
        {
            document.getElementById("emailError").innerText = "Email không hợp lệ";
            isValid = false;
        }

        if(!phoneRegex.test(phone))
        {
            document.getElementById("phoneError").innerText = "Số điện thoại phải từ 9 đến 11 chữ số";
            isValid = false;
        }

        if(className == "")
        {
            document.getElementById("classError").innerText = "Lớp không được để trống";
            isValid = false;
        }

        if(selectedCourse == "")
        {
            document.getElementById("courseError").innerText = "Vui lòng chọn khóa học";
            isValid = false;
        }

        if(isValid)
        {
            let registration = {
                fullName: fullName,
                email: email,
                phone: phone,
                className: className,
                course: selectedCourse,
                note: note
            };

            let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

            registrations.push(registration);

            localStorage.setItem("registrations", JSON.stringify(registrations));

            alert("Đăng ký thành công!");

            registerForm.reset();
        }
    });
}

/* REGISTRATIONS */
const registrationTable = document.getElementById("registrationTable");
const clearAllBtn = document.getElementById("clearAllBtn");

function renderRegistrations()
{
    if(registrationTable == null) return;

    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    let html = "";

    if(registrations.length == 0)
    {
        html = `
            <tr>
                <td colspan="7" class="text-center">
                    Chưa có dữ liệu đăng ký
                </td>
            </tr>
        `;
    }

    for(let i = 0; i < registrations.length; i++)
    {
        html += `
            <tr>
                <td>${registrations[i].fullName}</td>
                <td>${registrations[i].email}</td>
                <td>${registrations[i].phone}</td>
                <td>${registrations[i].className}</td>
                <td>${registrations[i].course}</td>
                <td>${registrations[i].note}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteRegistration(${i})">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    }

    registrationTable.innerHTML = html;
}

function deleteRegistration(index)
{
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    registrations.splice(index, 1);

    localStorage.setItem("registrations", JSON.stringify(registrations));

    renderRegistrations();
}

if(registrationTable != null)
{
    renderRegistrations();
}

if(clearAllBtn != null)
{
    clearAllBtn.addEventListener("click", function()
    {
        localStorage.removeItem("registrations");

        renderRegistrations();
    });
}

/* Darkmode */
/* DARK MODE */
const darkModeBtn = document.getElementById("darkModeBtn");

function applyTheme()
{
    let theme = localStorage.getItem("theme");

    if(theme == "dark")
    {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerText = "☀️ Light Mode";
    }
    else
    {
        document.body.classList.remove("dark-mode");
        darkModeBtn.innerText = "🌙 Dark Mode";
    }
}

if(darkModeBtn != null)
{
    applyTheme();

    darkModeBtn.addEventListener("click", function()
    {
        if(document.body.classList.contains("dark-mode"))
        {
            localStorage.setItem("theme", "light");
        }
        else
        {
            localStorage.setItem("theme", "dark");
        }

        applyTheme();
    });
}