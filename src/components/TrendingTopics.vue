<template>
    <div class="container mt-16 flex py-16">
        <div class="content mx-auto ">
            <h3 class="title">Kategoriye göre öne çıkan konular</h3>
            <div class="trending-titles mt-8 w-full lg:grid lg:grid-cols-4 gap-x-60 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1" >
                <div class="course-categories">
                    <h3 style="font-size: 19px; color: #1c1d1f" class="font-bold mb-4 " >Development</h3>
                    <div v-for="(course,index) in developmentCourses" :key="index" class="about-courses mb-4 mt-4">
                        <div class="course-name">
                            {{developmentCourses[index].courseName}}
                        </div>
                        <div class="course-students ">
                            {{developmentCourses[index].courseStudents}}
                        </div>
                    </div>
                </div>
                <div class="course-categories">
                    <h3 style="font-size: 19px; color: #1c1d1f" class="font-bold mb-4 " >Business</h3>
                    <div v-for="(course,index) in businessCourses" :key="index" class="about-courses mb-4 mt-4">
                        <div class="course-name">
                            {{businessCourses[index].courseName}}
                        </div>
                        <div class="course-students ">
                            {{businessCourses[index].courseStudents}}
                        </div>
                    </div>
                </div>
                <div class="course-categories md:mt-6">
                    <h3 style="font-size: 19px; color: #1c1d1f" class="font-bold mb-4 " >IT and Software</h3>
                    <div v-for="(course,index) in SoftwareCourses" :key="index" class="about-courses mb-4 mt-4">
                        <div class="course-name">
                            {{SoftwareCourses[index].courseName}}
                        </div>
                        <div class="course-students ">
                            {{SoftwareCourses[index].courseStudents}}
                        </div>
                    </div>
                </div>
                <div class="course-categories md:mt-6 ">
                    <h3 style="font-size: 19px; color: #1c1d1f" class="font-bold mb-4 " >Design</h3>
                    <div v-for="(course,index) in designCourses" :key="index" class="about-courses mb-4 mt-4">
                        <div class="course-name">
                            {{designCourses[index].courseName}}
                        </div>
                        <div class="course-students ">
                            {{designCourses[index].courseStudents}}
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                class="md:mt-3.5 trending-button button-width flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Daha Fazla Konuyu Keşfedin
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrendingTopics",
    data() {
        return {
            developmentCourses: [
                {
                    courseName: 'Python',
                    courseStudents: '36,354,994 students'
                },
                {
                    courseName: 'Web Development',
                    courseStudents: '11,415,615 students'
                },
                {
                    courseName: 'Machine Learning',
                    courseStudents: '7,070,015 students'
                }
            ],
            businessCourses: [
                {
                    courseName: 'Financial Analysis',
                    courseStudents: '1,195,282 students'
                },
                {
                    courseName: 'SQL',
                    courseStudents: '5,977,561 students'
                },
                {
                    courseName: 'PMP',
                    courseStudents: '1,733,398 students'
                }
            ],
            SoftwareCourses: [
            {
                courseName: 'AWS Certification',
                courseStudents: '6,078,244 students\n'
            },
            {
                courseName: 'Ethical Hacking',
                courseStudents: '10,931,066 students\n'
            },
            {
                courseName: 'Cyber Security',
                courseStudents: '3,998,037 students'
            }
        ],
            designCourses:[
                {
                    courseName: 'Photoshop',
                    courseStudents: '10,909,736 students'
                },
                {
                    courseName: 'Graphic Design',
                    courseStudents: '3,381,052 students\n'
                },
                {
                    courseName: 'Drawing\n',
                    courseStudents: '2,410,849 students\n'
                }
            ]
        }
    },

}
</script>

<style scoped>
.container {
    height: 100%;
    max-width: 2000px;
    align-items: center;
    background: #F7F9FA;
    width: 100%;

}
.content {
    height: 100%;
    align-items: center;
    background: #F7F9FA;
}

.title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -.2px;
    line-height: 28.8px;
    color: #1c1d1f;
}
.course-name{
    cursor:pointer;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 22.4px;
    color: #401b9c;
    text-decoration:underline;
}
.course-students{
    margin-top: 8px;
    font-size: 14px;
    line-height: 19.6px;
    color: #6a6f73;
}
.trending-button {
    background-color: transparent;
    font-weight: 700;
    border: 1px solid #1c1d1f;
    display: flex;
    align-items: center;
    padding: 14px;
    max-height: 38px;
}

</style>