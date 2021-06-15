import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid, Label} from "semantic-ui-react";

import CityService from "../services/cityService";
import WorkTimeService from "../services/workTimeService";
import JobPostingService from "../services/jobPostingService";
import JobService from "../services/jobService";
import WorkTypeService from "../services/workTypeService";



export default function AddJobPostingPage() {

    let jobPostingService = new JobPostingService();
     const AddJobPostingSchema = Yup.object().shape({
        numberOfOpenPosition: Yup.number().required("Boş bırakılamaz").min(0),
        salaryMin: Yup.number().required("Boş bırakılamaz").min(0),
        salaryMax: Yup.number().required("Boş bırakılamaz").min(0),
        applicationDeadline: Yup.date().required("Boş bırakılamaz"),
        city: Yup.object().required("Boş bırakılamaz"),
        job: Yup.object().required("Boş bırakılamaz"),
        workTime: Yup.object().required("Boş bırakılamaz"),
        workType: Yup.object().required("Boş bırakılamaz")
    });

    const formik = useFormik({
        initialValues: {
            numberOfOpenPosition: "",
            applicationDeadline: "",
            jobDescription: "",
            salaryMin: "",
            salaryMax: "",
            employer: {id: ""},
            city: {id: ""},
            job: {id: ""},
            workTime: {id: ""},
            workType: {id: ""},
        },

        validationSchema: AddJobPostingSchema,
        
        onSubmit: (values) => {
            formik.values.city.id = parseInt(values.city.id)
            formik.values.job.id = parseInt(values.job.id)
            formik.values.workTime.id = parseInt(values.workTime.id)
            formik.values.workType.id = parseInt(values.workType.id)
            formik.values.employer.id = 4
            console.log(values)
            jobPostingService.add(values).then(result => console.log(result.data.data))
        },
    });

    const [cities, setCities] = useState([])
    const [jobs, setJobs] = useState([])
    const [workTimes, setWorkTimes] = useState([])
    const [workTypes, setWorkTypes] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let jobService = new JobService()
        jobService.getJobs().then(result => setJobs(result.data.data))

        let workTimeService = new WorkTimeService()
        workTimeService.getWorkTimes().then(result => setWorkTimes(result.data.data))

        let workTypeService = new WorkTypeService()
        workTypeService.getWorkTypes().then(result => setWorkTypes(result.data.data))
    }, []);

    const workTimeOption = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.workTime,
        value: workTime.id,
    }));
    const workTypeOption = workTypes.map((workType, index) => ({
        key: index,
        text: workType.workType,
        value: workType.id,
    }));
    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id,
    }));
    const jobOption = jobs.map((job, index) => ({
        key: index,
        text: job.title,
        value: job.id,
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    return (
        <div>
            <Card fluid className="shadow">
                <Card.Content header='İlan Yayınla'/>
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                        <Label basic className="float-left my-1">İş Pozisyonu Seçin: </Label>
                            <Dropdown
                                clearable
                                item
                                placeholder="İş Pozisyonu"
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "job.id")
                                }
                                onBlur={formik.onBlur}
                                id="job"
                                value={formik.values.job.id}
                                options={jobOption}
                                
                            />
                            {formik.errors.job && formik.touched.job && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.job}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                        <Label basic className="float-left my-1">Şehir Seçin: </Label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Şehir"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "city.id")
                                }
                                onBlur={formik.onBlur}
                                id="city"
                                value={formik.values.city.id}
                                options={cityOption}
                            />
                            {formik.errors.city && formik.touched.city && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.city}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                        <Label basic className="float-left my-1">Çalışma Tipi Seçin:</Label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Tipi"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workType.id")
                                }
                                onBlur={formik.onBlur}
                                id="workType"
                                value={formik.values.workType.id}
                                options={workTypeOption}
                            />
                            {formik.errors.workType && formik.touched.workType && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workType}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                        <Label basic className="float-left my-1">Çalışma Zamanı Seçin: </Label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Zamanı"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workTime.id")
                                }
                                onBlur={formik.onBlur}
                                id="workTime"
                                value={formik.values.workTime.id}
                                options={workTimeOption}
                            />
                            {formik.errors.workTime && formik.touched.workTime && (
                                <div className={"ui pointing red basic label"}>{formik.errors.workTime}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid>
                                <Grid.Column width={8}>
                                <Label basic className="float-left my-1">Minimum Maaş Girin:</Label>
                                    <Form.Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Minimum Maaş"
                                        value={formik.values.salaryMin}
                                        name="salaryMin"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Form.Input>
                                    {formik.errors.salaryMin && formik.touched.salaryMin && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.salaryMin}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                <Label basic className="float-left my-1">Maksimum Maaş Girin:</Label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maksimum Maaş"
                                        value={formik.values.salaryMax}
                                        name="salaryMax"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.salaryMax && formik.touched.salaryMax && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.salaryMax}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Label basic className="float-left my-1">Açık Pozisyon Adedi Girin: </Label>
                                    <Form.Input
                                        style={{ width: "100%" }}
                                        id="numberOfOpenPosition"
                                        name="numberOfOpenPosition"
                                        onChange={formik.handleChange}
                                        value={formik.values.numberOfOpenPosition}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Açık Posisyon Sayısı"
                                    />
                                    {formik.errors.numberOfOpenPosition && formik.touched.numberOfOpenPosition && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.numberOfOpenPosition}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                <Label basic className="float-left my-1">Son Başvuru Tarihi Seçin:</Label>
                                    <Form.Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.applicationDeadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "applicationDeadline")
                                        }
                                        value={formik.values.applicationDeadline}
                                        onBlur={formik.handleBlur}
                                        name="applicationDeadline"
                                        placeholder="Son Başvuru Tarihi"
                                    />
                                    {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.applicationDeadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                        <Label basic className="float-left my-1">Açıklama Girin:</Label>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.jobDescription).toString()}
                                value={formik.values.jobDescription}
                                name="jobDescription"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.jobDescription && formik.touched.jobDescription && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobDescription}
                                </div>
                            )}
                        </Form.Field>

                        <Button
                         positive 
                         type="submit" 
                         disabled={!formik.dirty || formik.isSubmitting}
                         className="float-left"
                         >
                             Yayınla
                        </Button>

                    </Form>
                </Card.Content>
            </Card>
        </div>
    );
}
