<template>
    <div class="container mt-16 flex py-16">
        <div class="content mx-auto ">
            <h3 class="title">Kategoriye göre öne çıkan konular</h3>
            <div class="trending-titles mt-8 w-full lg:grid lg:grid-cols-4 gap-x-72 md:grid md:grid-cols-2">
                <div v-for="(category,index) in categories" :key="index" class="">
                    <span>{{ this.categories[index].title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrendingTopics",
    data() {
        return {
            categories: [
                {
                    title: 'Development',
                    courses: [
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
                    ]
                },
                {
                    title: 'Business',
                    courses: [
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
                    ]
                },
                {
                    title: 'IT and Software',
                    courses: [
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
                    ]
                }, {
                    title: 'Design',
                    courses: [
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
                },

            ]
        }
    }
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

</style>